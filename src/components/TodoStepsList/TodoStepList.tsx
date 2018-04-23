import * as React from 'react';
import styled from 'styled-components';

import {ITodoStep} from 'domains/types';

import {rem} from 'components/Styled/utils';

export const OrderedList = styled.ol`margin: 0;`;
OrderedList.displayName = 'OrderedList';

const ListItem = styled.li`
    padding-bottom: ${ rem(10) };
    
    &:first-child {
      padding-top: ${ rem(10) };
    }
    
    &:last-child {
      padding-bottom: 0;  
    }
`;
ListItem.displayName = 'ListItem';

const Bold = styled.span`
    font-weight: bold;
    margin-right: ${ rem(5) };
`;
Bold.displayName = 'Bold';

export interface IProps {
    steps: ITodoStep[],
}

const TodoStepList: React.SFC<IProps> = (props) => {
    const {steps} = props;
    return (
        <OrderedList>
            {steps.map((step: ITodoStep) => {
                return <ListItem key={step.id}>
                    <Bold>{step.title}:</Bold>
                    <span>{step.details}</span>
                </ListItem>
            })}
        </OrderedList>
    );
};

export default TodoStepList;