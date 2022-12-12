import styled from "styled-components";

const Form = styled.form`
background-color: ${(props)=>props.theme.main};
display: flex;
flex-direction: column;
padding: 0 10px;
margin: 0 auto;
`;
const LabelForm = styled.label`
font-size: 22px;
text-align: start;
margin-bottom: 5px;
`;

const LabelInput = styled.input`
max-width: 80%;
padding: 8px;
color: ${(props)=>props.theme.text};
@media screen and (min-width: 768px) {
max-width: 60%;
}
@media screen and (min-width: 1280px) {
max-width: 50%;
}

`;

const ButtonSubmit = styled.button`
margin: 10px 0;
padding: 8px;
color: #13132e;
background-color: #ccca41;
max-width: 90px;
font-size: 14px;
border: none;
transition: all 0.3s;
@media screen and (min-width: 768px) {
max-width: 150px;
font-size: 22px;
}
&:hover:not(:disabled) {
    cursor: pointer;
    box-shadow: red;;
}
&:disabled {
    background-color: grey;
}
`;

export {Form, LabelForm, LabelInput, ButtonSubmit};