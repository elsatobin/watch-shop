import { Button } from "@mui/material";

export const ButtonBorder = ({ children, color = "primary", sx="", ...props }) => (
   <Button
      variant="outlined"
      color={color}
      
      sx={{
         bgcolor: "transparent",
         borderWidth: "2px",
         borderColor: "inherit",
         transition:".25s ease-out",
         ...sx,
         "&:hover": {
            backgroundColor: `${color}.main`,
            color: "inherit",
            borderWidth: "2px",
            ...sx["&:hover"],
         },
      }}
      {...props}
   >
      {children}
   </Button>
);
