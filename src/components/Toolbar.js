import React from 'react';
import { Container, Pagination, Menu, Icon } from 'semantic-ui-react';

const Toolbar = ({
  handleMenuItemClick,
  activeItem,
  handlePaginationChange,
  currentPage,
  totalPages,
}) => {
  return (
    <Container>
      <Menu compact icon='labeled' floated="right">
        <Menu.Item
          name='grid'
          active={activeItem === 'grid'}
          onClick={handleMenuItemClick}
        >
          <Icon name='grid layout' />
          Grid
        </Menu.Item>
        <Menu.Item
          name='list'
          active={activeItem === 'list'}
          onClick={handleMenuItemClick}
        >
          <Icon name='list' />
          List
        </Menu.Item>
      </Menu>
      <Pagination
        activePage={currentPage}
        onPageChange={handlePaginationChange}
        totalPages={totalPages}
      />
    </Container>
  );
};

export default Toolbar;
