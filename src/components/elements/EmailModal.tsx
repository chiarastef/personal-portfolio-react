import React from "react";
import emailjs from "@emailjs/browser";
import Backdrop from "@mui/material/Backdrop";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { SxProps, Theme } from "@mui/material";
import { ClickAwayListener } from "@mui/material";
import { strings } from "../../loc/strings";
import Stack from "@mui/material/Stack";
import { AlertMessage } from "./AlertMessage";

interface EmailModalProps {
  isDarkMode: boolean;
  isEmailModalOpen: boolean;
  closeEmailModal: () => void;
  language: string;
}

export const EmailModal = (props: EmailModalProps) => {
  const [isSendingLoading, setIsSendingLoading] =
    React.useState<boolean>(false);
  const [isSendingSuccess, setIsSendingSuccess] =
    React.useState<boolean>(false);
  const [showAlert, setShowAlert] = React.useState<boolean>(false);
  const formRef = React.useRef<HTMLFormElement>(null);

  const inputFormStyles: SxProps<Theme> = {
    "& input, & textarea": {
      color: props.isDarkMode ? "#f5f5f5 !important" : "#171717 !important",
    },
    "& > div:hover fieldset": {
      borderColor: "#9feead !important",
      borderWidth: "2px",
    },
    "& .Mui-focused": {
      color: props.isDarkMode ? "#ffffffb3 !important" : "#0009 !important",
    },
    "& .Mui-focused fieldset": {
      borderColor: "#9feead !important",
    },
    "& div::after": {
      borderColor: props.isDarkMode ? "#ffffffb3" : "#0009",
    },
  };

  const buttonStyles: SxProps<Theme> = {
    "& .MuiButton-endIcon": {
      position: "relative",
      bottom: "1px",
    },
  };

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  const lightMode = createTheme({
    palette: {
      mode: "light",
    },
  });

  const sendEmail = async (e: React.FormEvent) => {
    setIsSendingLoading(true);
    e.preventDefault();
    if (formRef.current instanceof HTMLFormElement) {
      try {
        const sendEmail = await emailjs.sendForm(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          formRef.current,
          {
            publicKey: import.meta.env.VITE_EMAILJS_USER_ID,
          }
        );
        if (sendEmail.status) {
          setIsSendingSuccess(true);
          props.closeEmailModal();
        }
      } catch (error) {
        setIsSendingSuccess(false);
        console.log(error);
      }
    }
    setShowAlert(true);
    setIsSendingLoading(false);
  };

  const closeEmailModal = (e: MouseEvent | TouchEvent) => {
    e.stopPropagation();
    props.closeEmailModal();
  };

  const hideAlert = () => {
    setShowAlert(false);
  };

  return (
    <ThemeProvider theme={props.isDarkMode ? darkTheme : lightMode}>
      <Backdrop
        className="py-2"
        sx={(theme) => ({ color: "#fff", zIndex: theme.zIndex.drawer + 1 })}
        open={props.isEmailModalOpen}
        aria-hidden={!props.isEmailModalOpen}
      >
        {props.isEmailModalOpen && (
          <ClickAwayListener onClickAway={closeEmailModal}>
            <>
              <div
                id="emailFormModal"
                className="overflow-auto w-5/6 max-w-[650px] h-full sm:h-auto max-h-[570px] font-sourceSans bg-neutral-50 dark:bg-neutral-900 px-4 py-5 text-neutral-900 rounded-sm"
              >
                <div className="text-center rounded-sm">
                  <span className="inline-block py-0.5 px-1 text-xl font-medium bg-primaryColor">
                    {strings.EmailForm_Title}
                  </span>
                </div>
                <div className="text-center text-neutral-900 dark:text-neutral-100 mt-2">
                  {strings.EmailForm_Text}
                </div>
                <form ref={formRef} onSubmit={sendEmail}>
                  <div className="flex flex-wrap sm:gap-5 justify-between">
                    <TextField
                      className="w-full flex-col sm:w-[calc(50%-1.25rem)] sm:flex-row"
                      required
                      label={strings.EmailForm_NameLabel}
                      margin="normal"
                      size="small"
                      sx={inputFormStyles}
                    />
                    <TextField
                      className="w-full flex-col sm:w-[calc(50%-1.25rem)] sm:flex-row"
                      required
                      label={strings.EmailForm_EmailLabel}
                      type="email"
                      margin="normal"
                      size="small"
                      sx={inputFormStyles}
                    />
                  </div>
                  <TextField
                    className="w-full"
                    label={strings.EmailForm_MessaggeLabel}
                    required
                    multiline
                    rows={10}
                    margin="normal"
                    sx={inputFormStyles}
                  />
                  <Stack
                    className="flex-wrap justify-end mt-3 text-end"
                    direction="row"
                    spacing={2}
                  >
                    <Button
                      className="!bg-primaryColor !text-neutral-900 !border-transparent !rounded-sm"
                      variant="outlined"
                      sx={buttonStyles}
                      onClick={props.closeEmailModal}
                    >
                      {strings.EmailForm_Cancel}
                    </Button>
                    <Button
                      className="!bg-primaryColor !text-neutral-900 !border-transparent !rounded-sm"
                      type="submit"
                      variant="outlined"
                      endIcon={<SendIcon />}
                      sx={buttonStyles}
                      loading={isSendingLoading}
                      loadingPosition="end"
                    >
                      {strings.EmailForm_Send}
                    </Button>
                  </Stack>
                </form>
              </div>
              {!isSendingSuccess && (
                <AlertMessage
                  showAlert={showAlert}
                  isSendingSuccess={isSendingSuccess}
                  hideAlert={hideAlert}
                  language={props.language}
                />
              )}
            </>
          </ClickAwayListener>
        )}
      </Backdrop>
      {isSendingSuccess && (
        <AlertMessage
          showAlert={showAlert}
          isSendingSuccess={isSendingSuccess}
          hideAlert={hideAlert}
          language={props.language}
        />
      )}
    </ThemeProvider>
  );
};
