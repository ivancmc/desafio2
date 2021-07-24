import styled from 'styled-components';

export const Container = styled.div`
  width: 80%;
  margin: auto;

  .nav{
    margin: 20px auto;
    display: flex;
    align-items: center;
    justify-content: space-between;

    #logo{
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .cart{
      display: flex;
      justify-content: center;
      align-items: center;
      
      span{
        background-color: #ff5e0f;
        margin-bottom: 32px;
        margin-left: 43px;
        position: absolute;
        cursor: pointer;
        color: white;
        font-size: 14px;
        font-weight: bold;
      }
    }
  }

  section {
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: space-around;

    .product-content{
      display: grid;
      text-align: center;
      height: 300px;
      background: #fff;
      border-radius: 12px;
      padding: 12px;
      box-shadow: 0 4px 12px 2px;
    }
  }
`