import React from 'react';
import { Container, Pagination, Menu, Icon, Grid } from 'semantic-ui-react';

const Toolbar = ({
  handleMenuItemClick,
  activeItem,
  handlePaginationChange,
  currentPage,
  totalPages,
}) => {
  return (
    <Grid columns={2} stackable>
      <Grid.Row>
        <Grid.Column>
          <Container>
            <Menu compact>
              <Menu.Item
                name='grid'
                active={activeItem === 'grid'}
                onClick={handleMenuItemClick}
              >
                <Icon name='grid layout' />
              </Menu.Item>
              <Menu.Item
                name='list'
                active={activeItem === 'list'}
                onClick={handleMenuItemClick}
              >
                <Icon name='list' />
              </Menu.Item>
            </Menu>
          </Container>
        </Grid.Column>
        <Grid.Column>
          <Container>
            <Pagination
              activePage={currentPage}
              onPageChange={handlePaginationChange}
              totalPages={totalPages}
              ellipsisItem={null}
              siblingRange={0}
              firstItem={null}
              lastItem={null}
            />
          </Container>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default Toolbar;
