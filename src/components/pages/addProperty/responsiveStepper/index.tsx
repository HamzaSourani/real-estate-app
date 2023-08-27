import { useTranslation } from "react-i18next";
import { FormikErrors, useFormikContext } from "formik";
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
  Paper,
  alpha,
} from "@mui/material";
import LoadingButton from "@/components/other/loadingButton/LoadingButton";
import { STEPS } from "@/constants/addProperty";
import { AddPropertyValues } from "@/pages/addEditProperty/type";
import { Props, Steps } from "./type";
import AddPropertyStepperContent from "./content";

const ResponsiveStepper = ({ activeStep, setActiveStep }: Props) => {
  const { t } = useTranslation();
  const { isSubmitting, setTouched } = useFormikContext();
  const xs = useMediaQuery((theme: Theme) => theme.breakpoints.only("xs"));
  const lg = useMediaQuery((theme: Theme) => theme.breakpoints.up("lg"));
  const touchedValues = [
    {
      name: true,
      city: true,
      propertyType: true,
      region: true,
      furnish: true,
      address: true,
      detail: true,
      cladding: true,
      features: true,
      water_front: true,
    },
    {
      bed_rooms: true,
      bath_rooms: true,
      kitchens: true,
      floors: true,
      floor_level: true,
    },
    {
      sqft_living: true,
      sqft_living_15: true,
      sqft_lot: true,
      sqft_lot_15: true,
      sqft_above: true,
      sqft_basement: true,
    },
    {
      view: true,
      condition: true,
      grade: true,
      yr_built: true,
      yr_renovated: true,
    },
    {
      zip_code: true,
      lat: true,
      long: true,
      north: true,
      south: true,
      east: true,
      west: true,
    },
    { images: true, price: true },
  ];
  const handleNext = async () => {
    const errors = (await setTouched(
      touchedValues[activeStep]
    )) as FormikErrors<AddPropertyValues>;
    if (Object.keys(errors).length === 0) {
      setActiveStep((pre) => pre + 1);
    }
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
      {t("pages.add-edit-property.pagination.back")}
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
        {t("pages.add-edit-property.pagination.next")}
      </Button>
    );
  if (xs) {
    return (
      <Box
        py={2}
        px={1}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Stack
          py={2}
          direction={"row"}
          justifyContent={"center"}
          alignItems={"center"}
          spacing={1}
        >
          <Typography variant="h5" component={"p"}>
            {t(currentStep.label)}
          </Typography>
          {<currentStep.icon />}
        </Stack>
        <AddPropertyStepperContent activeStep={activeStep} />
        <MobileStepper
          variant="text"
          position="static"
          sx={{ width: "100%" }}
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
        sx={{
          pt: 2,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "calc(100vh - 66px)",
          bgcolor: (theme) => alpha(theme.palette.primary.dark, 0.1),
        }}
      >
        <Paper
          sx={{
            px: 2,
            py: 4,
            width: { xs: "100vw", sm: "90vw", md: "80vw", lg: "60vw" },
          }}
        >
          <Stepper activeStep={activeStep} alternativeLabel={!lg}>
            {STEPS.map((step, index) => (
              <Step key={index}>
                <StepLabel icon={<step.icon color="primary" />}>
                  {t(step.label)}
                </StepLabel>
              </Step>
            ))}
          </Stepper>
          <Box mt={4}>
            <AddPropertyStepperContent activeStep={activeStep} />
          </Box>
          <Stack
            mt={2}
            direction="row"
            justifyContent="space-between"
            alignItems={"center"}
            width={{ sm: "30%", md: "30%", lg: "20%" }}
          >
            {BackButton}
            {NextButton}
          </Stack>
        </Paper>
      </Box>
    );
  }
};

export default ResponsiveStepper;
