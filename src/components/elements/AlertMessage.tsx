import Alert from "@mui/material/Alert";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { strings } from "../../loc/strings";

interface AlertMessageProps {
  showAlert: boolean;
  isSendingSuccess: boolean;
  hideAlert: () => void;
  language: string;
}

export const AlertMessage = (props: AlertMessageProps) => {
  return (
    <Collapse in={props.showAlert}>
      <Alert
        className="fixed bottom-0 left-0 z-[3000]"
        severity={props.isSendingSuccess ? "success" : "error"}
        action={
          <IconButton
            aria-label="close"
            color="inherit"
            size="small"
            onClick={props.hideAlert}
          >
            <CloseIcon fontSize="inherit" />
          </IconButton>
        }
      >
        {props.isSendingSuccess
          ? strings.EmailForm_SentSuccess
          : strings.EmailForm_SentFailed}
        {!props.isSendingSuccess ? (
          <a
            href={`https://www.linkedin.com/in/chiarastefanelli/${
              props.language === "it" ? "" : "?locale=en_US"
            }`}
            target="_blank"
            title={strings.Footer_Linkedin}
          >
            LinkedIn
          </a>
        ) : (
          ""
        )}
        .
      </Alert>
    </Collapse>
  );
};
