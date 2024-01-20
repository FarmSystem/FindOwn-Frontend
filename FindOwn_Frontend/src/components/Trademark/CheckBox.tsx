import React, { useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";

const CheckboxGroup: React.FC = () => {
  const [checkedItems, setCheckedItems] = useState<{
    [key: string]: boolean;
  }>({
    option1: false,
    option2: false,
    option3: false,
    option4: false,
    option5: false,
    option6: false,
  });

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCheckedItems({
      ...checkedItems,
      [event.target.name]: event.target.checked,
    });
  };

  return (
    <Container sx={{ color: "#8CA48F", marginTop: "2rem" }}>
      <h1>분류정보</h1>
      <Typography variant="h5" gutterBottom>
        행정상태
      </Typography>
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox
              checked={checkedItems.option1}
              onChange={handleCheckboxChange}
              name="option1"
              color="success"
            />
          }
          label="출원"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={checkedItems.option2}
              onChange={handleCheckboxChange}
              name="option2"
              color="success"
            />
          }
          label="공고"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={checkedItems.option3}
              onChange={handleCheckboxChange}
              name="option3"
              color="success"
            />
          }
          label="무효"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={checkedItems.option4}
              onChange={handleCheckboxChange}
              name="option4"
              color="success"
            />
          }
          label="등록"
        />
      </FormGroup>

      <Typography
        variant="h5"
        gutterBottom
        sx={{
          marginTop: 3,
        }}
      >
        유형
      </Typography>
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox
              checked={checkedItems.option5}
              onChange={handleCheckboxChange}
              name="option5"
              color="success"
            />
          }
          label="도형복합"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={checkedItems.option6}
              onChange={handleCheckboxChange}
              name="option6"
              color="success"
            />
          }
          label="도형상표"
        />
      </FormGroup>
      {/* <Typography variant="subtitle1" gutterBottom>
        Selected Options:{" "}
        {Object.keys(checkedItems)
          .filter((key) => checkedItems[key])
          .join(", ")}
      </Typography> */}
    </Container>
  );
};

export default CheckboxGroup;
