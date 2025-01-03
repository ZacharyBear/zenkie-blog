import styles from './footer.module.scss'
const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className='content'>
        <div className='copyright'>
          Copyright <a href='https://github.com/ZacharyBear'>Zachary Bear</a>.
        </div>
        <div className='license'>
          Content use{' '}
          <a
            rel='license'
            href='http://creativecommons.org/licenses/by-nc-sa/4.0/'
          >
            CC-NC-SA 4.0 License
          </a>
          .
        </div>
        <div className='github'>
          Source opened on{' '}
          <a href='https://github.com/ZacharyBear/zenkie-blog'>Github</a>
        </div>
      </div>
    </div>
  )
}

export default Footer
