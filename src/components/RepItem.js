import React, { useEffect } from 'react';
import styled from 'styled-components';
import useRep from '../useRep';
import { useDispatch } from 'react-redux';

const UsersTable = styled.table``;

const UsersContainer = styled.div`
  margin: 10px 0;
`;

const UsersThead = styled.thead``;

const UsersTbody = styled.tbody``;

const UserTr = styled.tr``;

const UserTh = styled.th`
  cursor: pointer;
`;

const UserTd = styled.td``;

const UserItem = ({ rep }) => {
  const dispatch = useDispatch();

  return (
    <UserTr>
      <UserTd>{rep.name}</UserTd>
      <UserTd>{rep.description}</UserTd>
      <UserTd>{rep.html_url}</UserTd>
    </UserTr>
  );
};

export default function RepItems() {
  const { reps } = useRep();

  return (
    <>
      <UsersContainer>
        <UsersTable className='table table-sm table-bordered table-hover'>
          <UsersThead className='thead-dark'>
            <UserTr>
              <UserTh>Title</UserTh>
              <UserTh>Description</UserTh>
              <UserTh>Url</UserTh>
            </UserTr>
          </UsersThead>
          <UsersTbody>
            {reps.map((rep) => (
              <UserItem key={rep.id} rep={rep} />
            ))}
          </UsersTbody>
        </UsersTable>
      </UsersContainer>
    </>
  );
}
