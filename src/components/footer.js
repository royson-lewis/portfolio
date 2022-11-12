/** @format */

import Link from "next/link";
import styles from "../styles/footer.module.scss";

export default function Footer() {
  return <>
    <footer className={styles.footer}>
      <h3 className={styles.quickHead}>Quick Links</h3>
      <ul>
        <li>
          <Link href='/'>
            Home
          </Link>
        </li>
        <li>
          <Link href='/services'>
            Services
          </Link>
        </li>
        <li>
          <Link href='/#work_section'>
            Work
          </Link>
        </li>
        <li>
          <Link href='/about'>
            About
          </Link>
        </li>
        <li>
          <Link href='/contact'>
            Contact
          </Link>
        </li>
        <li>
          <a target='_blank' rel='noreferrer' href='https://storage.googleapis.com/rl_portfolio_backend/Resume-Royson-Lewis.pdf'>
            Resume
          </a>
        </li>
      </ul>
      <h3 className={styles.connectHead}>Connect with me</h3>
      <div>
        <a aria-label='github' rel='noreferrer' href='https://github.com/lewisroysonj' target='_blank'>
          <svg xmlns='http://www.w3.org/2000/svg' width='35.662' height='34.771' viewBox='0 0 35.662 34.771'>
            <path
              d='M11.928,28.56c0,.144-.165.259-.374.259-.237.022-.4-.093-.4-.259,0-.144.165-.259.374-.259C11.741,28.28,11.928,28.4,11.928,28.56Zm-2.236-.324c-.05.144.093.309.309.352a.337.337,0,0,0,.446-.144c.043-.144-.093-.309-.309-.374A.369.369,0,0,0,9.692,28.237Zm3.178-.122c-.209.05-.352.187-.331.352.022.144.209.237.424.187s.352-.187.331-.331S13.079,28.093,12.87,28.115ZM17.6.563A17.241,17.241,0,0,0,0,18.106,18.026,18.026,0,0,0,12.187,35.3c.92.165,1.244-.4,1.244-.87,0-.446-.022-2.9-.022-4.415,0,0-5.033,1.079-6.09-2.143,0,0-.82-2.092-2-2.632,0,0-1.647-1.129.115-1.107a3.8,3.8,0,0,1,2.775,1.855,3.8,3.8,0,0,0,5.242,1.5,4,4,0,0,1,1.15-2.423c-4.019-.446-8.074-1.028-8.074-7.945a5.449,5.449,0,0,1,1.7-4.235,6.793,6.793,0,0,1,.187-4.882c1.5-.467,4.961,1.941,4.961,1.941a16.986,16.986,0,0,1,9.031,0s3.458-2.416,4.961-1.941a6.79,6.79,0,0,1,.187,4.882,5.589,5.589,0,0,1,1.855,4.235c0,6.938-4.235,7.492-8.254,7.945a4.252,4.252,0,0,1,1.222,3.336c0,2.423-.022,5.421-.022,6.011,0,.467.331,1.035,1.244.87A17.86,17.86,0,0,0,35.662,18.106C35.662,8.134,27.574.563,17.6.563ZM6.989,25.361c-.093.072-.072.237.05.374.115.115.28.165.374.072.093-.072.072-.237-.05-.374C7.248,25.318,7.082,25.267,6.989,25.361Zm-.777-.582c-.05.093.022.209.165.28a.214.214,0,0,0,.309-.05c.05-.093-.022-.209-.165-.28C6.378,24.685,6.263,24.707,6.212,24.778Zm2.33,2.56c-.115.093-.072.309.093.446.165.165.374.187.467.072.093-.093.05-.309-.093-.446C8.851,27.245,8.635,27.223,8.542,27.338Zm-.82-1.057c-.115.072-.115.259,0,.424s.309.237.4.165a.328.328,0,0,0,0-.446C8.024,26.26,7.837,26.188,7.722,26.281Z'
              transform='translate(0 -0.563)'
              fill='#3f3d56'
            />
          </svg>
        </a>
        <a rel='noreferrer' href='https://twitter.com/lewisroysonj' aria-label='twitter' target='_blank'>
          <svg xmlns='http://www.w3.org/2000/svg' width='35.674' height='28.974' viewBox='0 0 35.674 28.974'>
            <path id='twitter' data-name='twitter' d='M32.007,10.6c.023.317.023.634.023.951,0,9.665-7.357,20.8-20.8,20.8A20.661,20.661,0,0,1,0,29.072a15.124,15.124,0,0,0,1.766.091,14.642,14.642,0,0,0,9.077-3.124,7.324,7.324,0,0,1-6.836-5.07,9.22,9.22,0,0,0,1.381.113,7.733,7.733,0,0,0,1.924-.249,7.312,7.312,0,0,1-5.863-7.176v-.091a7.363,7.363,0,0,0,3.3.928A7.322,7.322,0,0,1,2.49,4.716a20.782,20.782,0,0,0,15.075,7.651,8.253,8.253,0,0,1-.181-1.675,7.318,7.318,0,0,1,12.653-5,14.4,14.4,0,0,0,4.64-1.766,7.292,7.292,0,0,1-3.214,4.029,14.657,14.657,0,0,0,4.21-1.132A15.717,15.717,0,0,1,32.007,10.6Z' transform='translate(0 -3.381)' fill='#3f3d56' />
          </svg>
        </a>
        <a rel='noreferrer' href='https://www.linkedin.com/in/lewisroysonj/' aria-label='twitter' target='_blank'>
          <svg xmlns='http://www.w3.org/2000/svg' width='32.545' height='32.545' viewBox='0 0 32.545 32.545'>
            <path d='M30.221,2.25H2.317A2.335,2.335,0,0,0,0,4.6V32.449A2.335,2.335,0,0,0,2.317,34.8h27.9a2.341,2.341,0,0,0,2.325-2.346V4.6A2.341,2.341,0,0,0,30.221,2.25ZM9.836,30.146H5.013V14.614H9.844V30.146ZM7.424,12.493a2.8,2.8,0,1,1,2.8-2.8,2.8,2.8,0,0,1-2.8,2.8ZM27.918,30.146H23.094V22.591c0-1.8-.036-4.119-2.506-4.119-2.514,0-2.9,1.961-2.9,3.988v7.686H12.866V14.614h4.628v2.121h.065a5.081,5.081,0,0,1,4.569-2.506c4.882,0,5.79,3.218,5.79,7.4Z' transform='translate(0 -2.25)' fill='#3f3d56' />
          </svg>
        </a>
      </div>
    </footer>
    <section className={styles.footerBottom}>
      <p>&copy; 2020 Royson Lewis</p>
      <a href='/sitemap.xml'>Sitemap</a>
      <p>v{process.env.APP_VERSION}</p>
    </section>
  </>;
}
