import styled, {keyframes} from 'styled-components';

const List = styled.ol`
text-align: start;
`;

const ListItem = styled.li`
padding: 2px 5px;
font-size: 10px;
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
const Number = styled.span`
font-style: italic;
margin-left: 5px;
font-size: 10px;
@media screen and (min-width: 768px) {
font-size: 16px;
margin-left: 10px;
}
`
const animCall = keyframes`
0% {transform: rotate(0deg)};
50% {transform: rotate(-30deg)};
100% {transform: rotate(0deg)};
`
const animDelete = keyframes`
0% {transform: scale(1.1)};
50% {transform: scale(1)};
100% {transform: scale(1.1)};
`
const CallTo = styled.a`
display: flex;
justify-content: center;
align-items: center;
margin-left: auto;
width: 20px;
height: 20px;
border: none;
cursor: pointer;
color: ${({theme}) => theme.colors.font};
@media screen and (min-width: 768px) {
width: 30px;
height: 30px;  
}
& > svg {
     transition: all 250ms;
}
&:hover > svg {
    fill: green;
    animation-name: ${animCall};
    animation-duration: 1s;
    animation-iteration-count: infinite;
}
`
const MailTo = styled.a`
display: flex;
justify-content: center;
align-items: center;
margin-left: 5px;
width: 20px;
height: 20px;
border: none;
cursor: pointer;
color: ${({theme}) => theme.colors.font};
@media screen and (min-width: 768px) {
width: 30px;
height: 30px;  
}
& > svg {
    transition: all 250ms;  
}
&:hover > svg {
    fill: orange;
    animation-name: ${animDelete};
    animation-duration: 1s;
    animation-iteration-count: infinite;
}
`
const DeleteButton = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin-left: 5px;
width: 30px;
height: 30px;
background-color: transparent;
border: none;
color: ${({theme}) => theme.colors.font};
cursor: pointer;
transition: all 250ms;
&:hover:not(:disabled), 
&:focus, 
&:active {
    color: #9c1111;
    animation-name: ${animDelete};
    animation-duration: 1s;
    animation-iteration-count: infinite;
}
`
const ItemInfo = styled.p`
display: flex;
justify-content: space-between;
align-items: baseline;
font-size: 10px;
@media screen and (min-width: 768px) {
font-size: 18px;
}
`

export { List, ListItem, Number, DeleteButton, ItemInfo, CallTo, MailTo};