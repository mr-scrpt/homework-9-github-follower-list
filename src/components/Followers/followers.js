import React, { PureComponent } from 'react';
import styles from './followers.module.css';
import {getIsFetching, getFollowersInfo, getIsLoading} from '../../modules/Followers';
import { connect } from 'react-redux';
import cx from 'classnames';

class Followers extends PureComponent {
  render() {
    // Покажите статус загрузки
    // Если данные не были загружены - сообщите об этом пользователю
    const {followers, isFetching} = this.props;

    if (isFetching) return <p>Загрузка информации о подписчиках</p>;
    if (followers === null){
      return <p className='t-no-followers'>Нет информации о подписчиках</p>
    }
    if(followers.message && followers.message === 'Not Found'){
      return <p>Информация о подписчиказх не найдена</p>
    }
    return (
      <div className={cx(styles.root, 't-followers')}>
        {followers && followers.length && followers.map(follower=>(
          <div className={styles.follower} key={follower.id}>
            <img
              src={follower.avatar_url}
              alt={follower.login}
              className={styles.followerImg}
            />
            <p className={styles.followerLogin}>{follower.login}</p>
          </div>
        ))}
      </div>
    );
  }
}

// Используйте поля data, isLoading из стейта
export default connect(state => ({
  isFetching: getIsLoading(state),
  followers: getFollowersInfo(state)
}))(Followers);
