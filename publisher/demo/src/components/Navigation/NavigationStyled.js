import styled from 'styled-components'
import {Link} from 'gatsby'

export const TextSection = styled.section`
  max-width: 1460px;
  margin: 64px auto;
  padding: 0 30px;
  display: flex;  
  flex-direction: column;
  max-width: 1200px;
  
  @media only screen and (max-width: 767px) {
    padding: 0 40px;
  }
 
`;

export const Title = styled.h1`
  display: flex;
  justify-self: center;
  text-align: center;
  
  @media only screen and (max-width: 767px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Content = styled.p`
margin-right: ${props => props.marginRight || '0'};
  font-size: 20px;
  font-family: Georgia,Cambria,"Times New Roman",Times,serif;
  
  @media only screen and (max-width: 767px) {
    flex-direction: column;
    align-items: center;
  }
`;
export const ContentWraper = styled.div`

  font-size: 20px;
  font-family: Georgia,Cambria,"Times New Roman",Times,serif;
      display: flex;
    flex-direction: column;
    justify-content: space-around;
  
  @media only screen and (max-width: 767px) {
    flex-direction: column;
    align-items: center;
  }
    
    @media only screen and (min-width: 767px) {
    margin-right: ${props => props.marginRight || '0'};
    margin-left: ${props => props.marginLeft || '0'};
  }
`;
export const ContentWithImage = styled.div`
margin-right: ${props => props.marginRight || '0'};
  font-size: 20px;
  font-family: Georgia,Cambria,"Times New Roman",Times,serif;
  
  @media only screen and (max-width: 767px) {
    flex-direction: column;
  }
@media screen and (min-width:700px) {
  display: flex;
  justify-content: space-between;
}
`;

export const NavLink = styled(Link)`
  color: var(--white);
  font-size: 20px;
  font-weight: 500;
  
  @media only screen and (min-width: 768px) {
    padding: 16px;
    text-decoration: none;

     &.active {
       background: rgba(255, 255, 255, 0.2);
       text-decoration: none;
    }
  }
`;

export const NavItem = styled.li`
  padding: 8px 0;
  
  @media screen and (min-width: 768px) {
    margin-left: 24px;
    position: relative;
  }

  @media screen and (min-width: 1024px) {
    margin-left: 24px;
  }
`;
