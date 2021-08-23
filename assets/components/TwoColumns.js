import * as React from "react";
import classes from "../../assets/scss/modules/twocolumns.module.scss";

const TwoColumns = (props) => {
    return (
        <section
            id={props.sectionId}
            className={
                (props.sectionId ? classes[props.sectionId] : "") +
                " " +
                classes.section
            }
        >
            <div className={classes.Container}>
                <div className={classes.Row}>
                    <div className={classes.ColLeft}>{props.left}</div>
                    <div className={classes.ColRigh}>{props.right}</div>
                </div>
            </div>
        </section>
    );
};

export default TwoColumns;
