import React, {
  createContext,
  PropsWithChildren,
  useContext,
  useState,
} from 'react';

type StepperContextProps = {
  currentStep: number;
  nextStep: () => void;
  completeStep: () => void;
  isStepCompleted: (step: number) => boolean;
};

const StepperContext = createContext<StepperContextProps | undefined>(
  undefined,
);

export const StepperProvider: React.FC<PropsWithChildren> = ({
  children,
}: PropsWithChildren) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<Set<number>>(new Set());

  const nextStep = () => setCurrentStep((prev) => prev + 1);
  const completeStep = () => {
    setCompletedSteps((prev) => new Set(prev).add(currentStep));
  };
  const isStepCompleted = (step: number) => completedSteps.has(step);

  return (
    <StepperContext.Provider
      value={{ currentStep, nextStep, completeStep, isStepCompleted }}
    >
      {children}
    </StepperContext.Provider>
  );
};

export const useStepper = () => {
  const context = useContext(StepperContext);

  if (!context) {
    throw new Error('useStepperContext must be used within a StepperProvider');
  }

  return context;
};
