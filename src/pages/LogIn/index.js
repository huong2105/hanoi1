import React from 'react';
import BreadcrumbComponent from '../../components/Breadcrumb';
import Breadcrumb from './Components/breadcrumb'
import Infologin from './Components/Infologin';


const PageLogIn = () => {
      return (
            <div>
                  <BreadcrumbComponent title = "Đăng nhập"  />
                  <Infologin/>
            </div>
      );
};

export default PageLogIn;