function Stepper({ steps, activeStep }) {
  return (
    <div className="stepper-container">
      {steps.map((step, index) => {
        const isActiveStep = activeStep === step.value;
        const activeStepIndex = isActiveStep ? index : null;

        return (
          <>
            <button className={`${isActiveStep ? 'active-step' : ''} step`}>
              {step.label}
            </button>
            {index !== steps.length - 1 && (
              <div
                className={`step-border ${
                  isActiveStep && index > 0 ? 'null' : 'prev-step-border'
                }`}
              />
            )}
          </>
        );
      })}
    </div>
  );
}

export default Stepper;
