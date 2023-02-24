import React from 'react';
import { DiGitBranch } from 'react-icons/di';
import { BsCheck2All } from 'react-icons/bs';
import { RiSignalTowerLine } from 'react-icons/ri';
import { IoIosCloseCircleOutline } from 'react-icons/io';
import { RxExclamationTriangle } from 'react-icons/rx';

const Footer = () => {
  return (
    <footer>
      <ul>
        <li>
          <DiGitBranch />
          master+
        </li>
        <li><IoIosCloseCircleOutline/>0</li>
        <li><RxExclamationTriangle/>0</li>
      </ul>
      <ul>
        <li>Ln 13, Col 20</li>
        <li>Spaces: 2</li>
        <li>UTF-8</li>
        <li>LF</li>
        <li>{'{ }'} TypeScript React</li>
        <li>
          <RiSignalTowerLine />
          Go Live
        </li>
        <li>
          <BsCheck2All />
          Prettier
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
