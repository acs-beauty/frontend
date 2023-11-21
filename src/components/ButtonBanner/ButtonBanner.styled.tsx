import styled from "@emotion/styled";

export const Button = styled.button`
    position: absolute;
    top: 74%;
    left: 50%;
    transform: translate(-50%);
    width: 14rem;
    height: 1.6rem;
    color: #FFFFFF;
    background-color: #FB4994;
    border: 0;
    font-size: 1rem;
    text-transform: uppercase;

    @media (min-width: 601px) {
        width: 18.3rem;
        height: 3.2rem;
        font-size: 1.6rem;
    }

    @media (min-width: 774px) {
        width: 34.5rem;
        height: 5.6rem;
        font-size: 2rem;
    }
`;

