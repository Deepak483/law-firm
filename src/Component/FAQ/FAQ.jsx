import React from "react";
import styles from "./FAQ.module.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import AccordionDetails from "@mui/material/AccordionDetails";
// import { ReactComponent as PlusIcon } from "../../assests/svgs/plusIcon.svg";
import { faqDetails } from "../../data";
import { Typography } from "@mui/material";

const FAQ = () => {
  return (
    <div className={styles.faqContainer}>
      <div className={styles.subContainer}>
        <div className={styles.faqHeading}>
          <h1>FAQ</h1>
          <p>
            Amet minim mollit non deserunt ullamco est sit<br></br> aliqua dolor
            do amet sint.
          </p>
        </div>
        <div className={styles.accordion}>
          {faqDetails.map((element) => {
            return (
              <Accordion
                key={element.title}
                style={{
                  borderTop: "0.2px solid rgba(255,255,255,0.1)",
                  borderBottom: "0.2px solid rgba(255, 255, 255, 0.1)",
                }}
              >
                <AccordionSummary
                  expandIcon={
                    <AddCircleOutlineOutlinedIcon
                      sx={{
                        height: "20px",
                        width: "20px",
                        borderRadius: "100%",
                        color: "#E3B748",
                      }}
                      style={{ fontSize: "medium" }}
                    />
                  }
                  style={{ backgroundColor: "#1d1d1d" }}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography
                    sx={{ opacity: "1" }}
                    className={styles.faqTitle}
                    style={{ fontSize: "1.6rem" }}
                  >
                    {element.title}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails style={{ backgroundColor: "#1d1d1d" }}>
                  <Typography
                    className={styles.faqAns}
                    style={{
                      fontSize: "1.2rem",
                      maxHeight: "12rem",
                    }}
                  >
                    {element.ans}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
