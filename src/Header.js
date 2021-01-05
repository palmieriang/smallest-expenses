import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Header = ({ provider, balance }) => {
  const { account_number, description, sort_code, title } = provider;
  const { amount, currency_iso } = balance;

  return (
    <WrapperWide>
      <Wrapper>
        <Row>
          <Item>{description}:</Item>
          <Item>{title}</Item>
        </Row>
        <Row>
          <Item>{account_number}</Item>
          <Item>{sort_code}</Item>
        </Row>
        <Row>
          <Item>Balance</Item>
          <Item>
            {currency_iso} {amount}
          </Item>
        </Row>
      </Wrapper>
    </WrapperWide>
  );
};

const Item = styled.p`
  margin-right: 10px;
`;

const Row = styled.div`
  display: flex;
`;

const Wrapper = styled.div`
  margin: auto;
  max-width: 1200px;
  padding: 10px;
`;

const WrapperWide = styled.div`
  background-color: #333;
  color: #fff;
`;

Header.propTypes = {
  provider: PropTypes.shape({
    account_number: PropTypes.string,
    description: PropTypes.string,
    sort_code: PropTypes.string,
    title: PropTypes.string,
  }),
  balance: PropTypes.shape({
    amount: PropTypes.number,
    currency_iso: PropTypes.string,
  }),
};

export default Header;
