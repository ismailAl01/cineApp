import React from 'react';
import Link from 'next/link';
import { isNil } from 'lodash';
import { useRouter } from 'next/router';

import Container from '@/shared/components/Container';
import SearchForm from '@/shared/components/Layout/Search';

const Header: React.FC = () => {
  const router = useRouter();

  const onSearch = (values, { resetForm }) => {
    if (!isNil(values.name)) {
      resetForm();
      return router.push(`/movies/search?name=${values.name}`);
    }
  };

  return (
    <header className="header__area">
      <Container>
        <div className="wrapper">
          <div className="header__area--left">
            <ul className="--menu">
              <li key="films" className="active">
                <Link href={"/"}>
                  <span>Films</span>
                </Link>
              </li>
              <li key="series" className="">
                <Link href={"/series"}>
                  <span>Series</span>
                </Link>
              </li>
            </ul>
          </div>
          <Link href="/" className="header__area--logo">
            <img src="/logo.svg" alt="Logo cineApp" />
          </Link>
          <div className="header__area--right">
            <SearchForm onSearch={onSearch} />
          </div>
        </div>
      </Container>
    </header>

  );
};

export default Header;
