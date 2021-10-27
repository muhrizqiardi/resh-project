import styled from "styled-components";
import colorPalette from "../variables/colorPalette";
import dotsMenu from "../assets/dots-menu.svg";
import addToLibrary from "../assets/add-to-library.svg";
import share from "../assets/share.svg";

const Wrapper = styled.div`
  max-width: 768px;
  margin: 0 auto;
  padding: 10px;
  background-color: white;
  border-top: 3px solid ${colorPalette.primaryDark.rgb()};
  & .book-header {
    display: grid;
    grid-template-columns: 80px 1fr 60px;
    & .book-img {
      & img {
        height: 100px;
        width: 65px;
        border-radius: 7px;
      }
    }
    & .book-desc {
      & .book-title {
        font-size: 16px;
        font-weight: bold;
        font-family: Raleway, Arial, Helvetica, sans-serif;
        margin: 0;
        margin-bottom: 5px;
      }
      & p {
        margin: 0;
        font-size: 12px;
        font-family: Inter, Arial, Helvetica, sans-serif;
      }
      & .book-progress {
        font-family: Inter, Arial, Helvetica, sans-serif;
        font-size: 11px;
        margin-top: 10px;
      }
    }
    & .book-menu {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: end;
      & .menu-button,
      & .love-button,
      & .share-button {
        width: 30px;
        height: 30px;
        background-color: white;
        border-radius: 100%;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        & img {
          width: 20px;
          height: 20px;
        }
        &:active {
          filter: brightness(0.75);
        }
      }
      & .menu-button {
        background-color: ${colorPalette.primaryDark.rgb()};
        & img {
          filter: invert(100%);
        }
        &:active {
          background-color: ${colorPalette.primaryDark.rgb()};
          filter: brightness(3);
        }
      }
    }
  }
  & .book-details {
    margin: 10px 0;
    & table {
      width: 100%;
      font-family: Inter, Arial, Helvetica, sans-serif;
      font-size: 12px;
      & tbody .col-1 {
        font-weight: bold;
      }
    }
  }
  & .book-synopsis {
    font-size: 14px;
    font-family: Inter, Arial, Helvetica, sans-serif;
  }

  /* Desktop */
  @media (min-width: 768px) {
    & {
      padding: 15px;
    }
    & .book-header {
      display: grid;
      grid-template-columns: 115px 1fr 60px;
      & .book-img img {
        height: 150px;
        width: 100px;
        border-radius: 20px;
      }
      & .book-desc {
        & .book-title {
          font-size: 36px;
        }
        & p {
          font-size: 16px;
          & .book-author {
            font-size: 16px;
            font-family: Inter, Arial, Helvetica, sans-serif;
            margin-bottom: 5px;
            & span {
              color: black;
            }
          }
          & .book-year {
            font-size: 16px;
            font-family: Inter, Arial, Helvetica, sans-serif;
            margin-bottom: 5px;
          }
        }
      }
      & .book-menu {
        & .menu-button,
        & .love-button,
        & .share-button {
          width: 40px;
          height: 40px;
        }
      }
    }
    & .book-details table {
      font-size: 14px;
    }
    & .book-synopsis {
      font-size: 16px;
    }
  }
`;

function Details(props) {
  return (
    <Wrapper>
      <div className="book-header">
        <div className="book-img">
          <img src="https://dummyimage.com/100x150.png" alt="placeholder" />
        </div>
        <div className="book-desc">
          <h1 className="book-title">Book Title</h1>
          <p>
            by <span className="book-author">Author</span> ·{" "}
            <span className="book-year">2019</span>
          </p>
          <div className="book-progress">35 out of 107 pages</div>
        </div>
        <div className="book-menu">
          <div className="menu-button">
            <img src={dotsMenu} alt="" />
          </div>
          <div className="love-button">
            <img src={addToLibrary} alt="" />
          </div>
          <div className="share-button">
            <img src={share} alt="" />
          </div>
        </div>
      </div>
      <div className="book-details">
        <table>
          <tbody>
            <tr>
              <td className="col-1">ISBN</td>
              <td className="col-2">{8028189560}</td>
            </tr>
            <tr>
              <td className="col-1">Year</td>
              <td className="col-2">{1992}</td>
            </tr>
            <tr>
              <td className="col-1">Publisher</td>
              <td className="col-2">{"Publisher Name"}</td>
            </tr>
            <tr>
              <td className="col-1">Authors</td>
              <td className="col-2">
                {["Author 1", "Author 2", "Author 3"].join(", ")}
              </td>
            </tr>
            <tr>
              <td className="col-1">Page</td>
              <td className="col-2">{130}</td>
            </tr>
            <tr>
              <td className="col-1">Languages</td>
              <td className="col-2">English</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="book-synopsis">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere sint
          sunt iure, aspernatur aliquid odit itaque pariatur eaque praesentium?
          Ipsum labore earum dicta aut tempora rem cum debitis eos voluptatem
          dolore doloribus laudantium sapiente atque eveniet fugiat reiciendis
          a, ducimus molestias, illum consectetur? Placeat excepturi unde quae
          et voluptate voluptas?
        </p>
        <p>
          Recusandae perferendis, cumque fuga libero aperiam quasi quae a
          molestiae itaque molestias, nisi obcaecati quia dolorem. Dolore autem
          iure maiores quos alias a sit eveniet tempora ipsa laboriosam ratione
          laudantium obcaecati voluptas, qui in provident facere vel minima
          illo, accusamus error? Voluptas iste delectus, magni incidunt
          inventore quis. Quos, quo.
        </p>
        <p>
          Dolorum velit officia obcaecati perspiciatis hic porro, rem, ipsa quis
          impedit quae nobis eligendi? Ipsa ducimus minima numquam quibusdam
          voluptatem neque, laboriosam perspiciatis facilis vitae perferendis
          culpa aut natus voluptates eaque necessitatibus error cupiditate cum
          dolorem magni! Cupiditate tempora quos commodi, facilis provident
          reprehenderit pariatur ex et ullam quasi consequatur!
        </p>
      </div>
    </Wrapper>
  );
}
export default Details;
