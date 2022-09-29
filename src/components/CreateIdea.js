import React, { useState } from "react";
import ButtonMain from "./Button.js";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import FormIdea from "./FormIdea";

const CreateIdea = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <ButtonMain
        onClick={() => setOpen(true)}
        sx={{ margin: "25px" }}
        msg="Crear Idea"
      />
      <Button
        sx={{ margin: "0px" }}
        variant="outlined"
        onClick={() => setOpen(true)}
      >
        Crear Idea
      </Button>
      <Dialog
        sx={{ width: "auto", height: "auto" }}
        aria-labelledby="dialog-title"
        aria-describedby="dialog-description"
        open={open}
        onClose={() => setOpen(false)}
      >
        <DialogTitle
          variant="h4"
          fontWeight={"600"}
          sx={{ margin: "auto" }}
          id="dialog-title"
        >
          Crea una idea
        </DialogTitle>
        <DialogContent sx={{ display: "flex", flexDirection:"column" }}>
          <FormIdea id="dialog-description"></FormIdea>
          <ButtonMain
            sx={{ margin: "25px" }}
            msg="X"
            onClick={() => setOpen(false)}
          />
            {/* <Button variant="outlined" onClick={() => setOpen(false)}>
              X
            </Button> */}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CreateIdea;
