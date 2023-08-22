import { useTranslation } from "react-i18next";
import { useFormikContext } from "formik";
import {
  Box,
  Button,
  Stack,
  Step,
  StepLabel,
  Stepper,
  MobileStepper,
  useMediaQuery,
  Theme,
  Typography,
} from "@mui/material";
import LoadingButton from "@/components/other/loadingButton/LoadingButton";
import { STEPS } from "@/constants/addProperty";
import { AddPropertyValues } from "@/pages/addEditProperty/type";
import { Props, Steps } from "./type";
import AddPropertyStepperContent from "./content";

const ResponsiveStepper = ({ activeStep, setActiveStep }: Props) => {
  const { t } = useTranslation();
  const { isSubmitting, validateForm } = useFormikContext<AddPropertyValues>();
  const xs = useMediaQuery((theme: Theme) => theme.breakpoints.only("xs"));

  const handleNext = async () => {
    const errors = await validateForm();
    if (Object.keys(errors).length === 0) setActiveStep((pre) => pre + 1);
  };
  const handleBack = () => {
    setActiveStep((pre) => pre - 1);
  };
  const currentStep = STEPS[activeStep];
  const BackButton = (
    <Button
      variant="contained"
      onClick={handleBack}
      disabled={activeStep === Steps.INFO}
    >
      {t("pages.add-property.pagination.back")}
    </Button>
  );
  const NextButton =
    activeStep === Steps.PRICE ? (
      <LoadingButton
        isSubmitting={isSubmitting}
        buttonText={t("common.create")}
      />
    ) : (
      <Button variant="contained" onClick={handleNext}>
        {t("pages.add-property.pagination.next")}
      </Button>
    );
  if (xs) {
    return (
      <Box
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Stack
          direction={"row"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Typography>{t(currentStep.label)}</Typography>
          {<currentStep.icon />}
        </Stack>
        <AddPropertyStepperContent activeStep={activeStep} />
        <MobileStepper
          variant="text"
          position="static"
          activeStep={activeStep}
          steps={STEPS.length}
          backButton={BackButton}
          nextButton={NextButton}
        />
      </Box>
    );
  } else {
    return (
      <Box
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Stepper activeStep={activeStep} alternativeLabel>
          {STEPS.map((step, index) => (
            <Step key={index}>
              <StepLabel icon={<step.icon color="primary" />}>
                {t(step.label)}
              </StepLabel>
            </Step>
          ))}
        </Stepper>
        <AddPropertyStepperContent activeStep={activeStep} />
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems={"center"}
        >
          {BackButton}
          {NextButton}
        </Stack>
      </Box>
    );
  }
};

export default ResponsiveStepper;
