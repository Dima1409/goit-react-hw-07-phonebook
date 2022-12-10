import styled from 'styled-components';

const List = styled.ol`

text-align: start;
`;

const ListItem = styled.li`
padding: 2px 5px;
font-size: 12px;
display: flex;
justify-content: space-between;
align-items: center;
max-width: 320px;
margin-bottom: 5px;
&:last-child {
    margin-bottom: 0;
}
@media screen and (min-width: 768px) {
max-width: 600px;
font-size: 18px;
}
`
const CallTo = styled.a`
display: flex;
justify-content: center;
align-items: center;
margin-left: auto;
width: 30px;
height: 30px;
border: none;
cursor: pointer;
color: ${({theme}) => theme.colors.font};
& > svg {
    transition: all 250ms;  
}
&:hover > svg {
    fill: green;
    transform: rotate(-10deg);
}
`
const DeleteButton = styled.button`
display: flex;
justify-content: center;
align-items: center;
margin-left: 10px;
width: 30px;
height: 30px;
background-color: transparent;
border: none;
color: ${({theme}) => theme.colors.font};
cursor: pointer;
transition: all 250ms;

&:hover, 
&:focus, 
&:active {
    color: #9c1111;
}
`
const ItemInfo = styled.p`
display: flex;
justify-content: space-between;
`

export { List, ListItem, DeleteButton, ItemInfo, CallTo};