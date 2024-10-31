import styled from "styled-components";

export const Container = styled.section`
  margin-top: 10rem;

  header {
    text-align: center;
    h2 {
      font-size: 4rem;
    }
    p {
      color: var(--green);
      font-weight: 500;
    }
  }

  .contacts {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    margin-top: 1.5rem;
    flex-wrap: wrap; /* Allow wrapping on smaller screens */

    .contact-item {
      flex: 1; /* Allow flex item to grow */
      max-width: 300px; /* Limit the max width for small screens */
      background-color: var(--green);
      border-radius: 1.4rem;
      transition: background-color 0.25s;

      .contact-link {
        display: flex;
        align-items: center;
        justify-content: center; /* Center the contents */
        padding: 1.6rem 2.8rem; /* Padding for clickable area */
        color: var(--black);
        font-weight: 500;
        text-decoration: none; /* Remove underline from links */
        width: 100%; /* Make link fill the container */
        border-radius: 1.4rem; /* Match button's border radius */
        text-align: center; /* Center text */

        img {
          width: 3rem; /* Smaller icon size */
          margin-right: 1rem; /* Space between icon and text */
        }

        span {
          white-space: nowrap; /* Prevent text from wrapping */
        }

        &:hover {
          background-color: var(--pink);
          color: #FFF;
        }
      }
    }
  }

  @media (max-width: 375px) {
    .contacts {
      flex-direction: column;
      .contact-item {
        width: 100%; /* Full width for smaller screens */
        margin-bottom: 1rem; /* Spacing between items */
        
        .contact-link {
          padding: 1rem; /* Adjust padding for smaller screens */
          font-size: 1rem; /* Font size adjustment */
          img {
            width: 2.5rem; /* Further reduce icon size for small screens */
          }
        }
      }
    }
  }
`;
