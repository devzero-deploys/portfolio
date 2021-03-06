import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 7rem;
    height: 3rem;

    position: fixed;
    bottom: 2rem;
    right: 2rem;

    background-color: #191818;
    border-radius: .3rem;
    cursor: pointer;
    z-index: 101;

    img {
        width: 2.5rem;
        margin-right: .5rem;
    };

    .MuiSvgIcon-root {
        font-size: 2.5rem !important;
    };
`;

export const DropUp = styled.div`
    display: ${({ show }: { show: boolean }) => show ? 'flex' : 'none'};
    flex-direction: column;
    align-items: center;
    justify-content: center;

    position: fixed;
    bottom: 5.5rem;
    right: 2rem;

    width: 7rem;
    padding: .5rem 0;

    background-color: #191818;
    border-radius: .3rem;
    cursor: pointer;
    z-index: 101;
`;

export const DropUpItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    img {
        width: 2.5rem;
        margin-right: 1rem;
    };
`;  
