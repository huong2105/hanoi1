import React from 'react';
import BreadcrumbComponent from '../../components/Breadcrumb';
import Breadcrumb from "./Components/breadcrumb"
import Infosignup from './Components/Infosignup';

const Pagesignup = () => {
      return (
            <div>
                 <BreadcrumbComponent title = "Đăng ký" />
                 <Infosignup />
            </div>
      );
};

export default Pagesignup;