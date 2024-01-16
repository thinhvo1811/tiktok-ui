import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://scontent.fsgn5-2.fna.fbcdn.net/v/t1.6435-9/117354824_792500984821445_4185575291286150690_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=be3454&_nc_ohc=1DZySV3dMUcAX8LSBdI&_nc_oc=AQkOfBKuHop9aainGQbTUCg3wTtSzYfBoiVSsIEOaIN9z0-oP_5Bnk5ihVVR0suG4l0&_nc_ht=scontent.fsgn5-2.fna&oh=00_AfBkK-Qp2WmCpq1JYEM1z3sE0ifWug5eQlM5R4lcejSrkA&oe=65CC5BD3"
                alt="Hoaa"
            />
            <div className={cx('info')}>
                <h4 className={cx('username')}>
                    <span>vincent</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('name')}>Võ Quốc Thịnh</span>
            </div>
        </div>
    );
}

export default AccountItem;
