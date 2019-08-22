import React, {PureComponent} from 'react';
import styles from './UserInfo.module.css';
import {getIsFetching, getUserInfo} from '../../modules/User'

import {connect} from 'react-redux';

class UserInfo extends PureComponent {
  render() {
    // Покажите статус загрузки
    // Если данные не были загружены - сообщите об этом пользователю
    const {user: {avatar_url,bio,name}, isFetching} = this.props;
    if (isFetching) return <p>Загрузка данных о пользователе</p>;
    if (!name) return <p>Данные о пользователе отсутсвуют</p>;

    return (
      <div className={styles.root}>
        <div className={styles.imageWrapper}>
          <img
            className={styles.image}
            src={avatar_url}
            alt={name}/>
        </div>
        <div>
          <p className="t-user-name">{name}</p>
          <p className="t-user-bio">{bio}</p>
        </div>
      </div>

    );
  }
}

// Используйте поля data, isLoading из стейта
export default connect(state => ({
  isFetching: getIsFetching(state),
  user: getUserInfo(state)
}))(UserInfo);
