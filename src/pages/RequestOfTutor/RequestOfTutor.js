import classNames from 'classnames/bind';
import { useState, useEffect } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import images from '~/assets/images';
import Image from '~/components/Image';
import Button from '~/components/Button';
import styles from './RequestOfTutor.module.scss';
import useRequestsPrivate from '~/hooks/useRequestPrivate';
import Popup from './Popup';

const cx = classNames.bind(styles);

const FORM_REQUEST_URL = 'FormRequestTutor/tutorViewForm';

function RequestOfTutor() {
    const [forms, setForms] = useState([]);
    const [limitPage, setLimitPage] = useState(0); 
    const [currentPage, setCurrentPage] = useState(1);
    const [showModal, setShowModal] = useState(false);
    const [modalContent, setModalContent] = useState('');
    const requestPrivate = useRequestsPrivate();

    useEffect(() => {
        const fetchForm = async() =>{
            try {
                const response = await requestPrivate.get(FORM_REQUEST_URL);
                setForms(response.data.listResult);
                setLimitPage(response.data.limitPage)
            } catch (error) {
                console.error('Error:', error);
            }
        }
        fetchForm();
    }, [requestPrivate]);

    const handleReject = () => {
        setModalContent('Are you sure you want to reject this request?');
        setShowModal(true);
    };

    const handleApply = () => {
        setModalContent('Are you sure you want to apply for this request?');
        setShowModal(true);
    };

   

    return (
        <div className={cx('wrapper')}>
            <Container className={cx('container')}>
                {forms.map((form, index) => {
                    return (
                        <Row key={index} className={cx('container__hero')}>
                            <Col lg="8" className={cx('container__card')}>
                                <div className={cx('container__form-control')}>
                                    <div className={cx('container__form-control-info')}>
                                        <strong>Subject:</strong>
                                        <span>{form.subjectName}</span>
                                    </div>
                                    <div className={cx('container__form-control-info')}>
                                        <strong>Created On:</strong>
                                        <span>{form.createDay}</span>
                                    </div>
                                    <div className={cx('container__form-control-info')}>
                                        <strong>Start Date:</strong>
                                        <span>{form.dayStart}</span>
                                    </div>
                                    <div className={cx('container__form-control-info')}>
                                        <strong>End Date:</strong>
                                        <span>{form.dayEnd}</span>
                                    </div>
                                    <div className={cx('container__form-control-info')}>
                                        <strong>Days of Week:</strong>
                                        <span>{form.dayOfWeek}</span>
                                    </div>
                                    <div className={cx('container__form-control-info')}>
                                        <strong>Time:</strong>
                                        <span>{form.timeStart} - {form.timeEnd}</span>
                                    </div>
                                    <div className={cx('container__form-control-info')}>
                                        <strong>Description:</strong>
                                        <span>{form.description}</span>
                                    </div>
                                </div>
                            </Col>

                            <Col lg="4" className={cx('container_avatar')}>
                                <Image src={form.avatar || images.avatar} alt={form.fullName} />
                                <p>{form.fullName}</p>
                                <div className={cx('container_avatar-buttons')}>
                                    <button className={cx('container_avatar-button', 'reject')} onClick={handleReject}>
                                        Reject
                                    </button>
                                    <button className={cx('container_avatar-button')} onClick={handleApply}>
                                        Apply
                                    </button>
                                </div>
                            </Col>
                        </Row>
                    );
                })}
            </Container>

            {showModal && (
                <Popup setShowModal={setShowModal} modalContent={modalContent}/>
            )}
        </div>
    );
}

export default RequestOfTutor;
