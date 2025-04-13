import classNames from "classnames";
import { motion } from "framer-motion";
import useFeatureStore from "../store/store";

type FeatureCardProps = {
  // gradient: string;
  // children: React.ReactNode;
} & CardProps;

type CardProps = {
  // id: string;
  feature: any //TODO: change type
};

const FeatureCard = ({
  // gradient, children,
  // id 
  feature
}: FeatureCardProps) => {
  const { id, title, description, compName, stacks, duration, location } = feature;

  const inViewFeature = useFeatureStore((state) => state.inViewFeature);

  const setFullscreenFeature = useFeatureStore(
    (state) => state.setFullscreenFeature
  );

  return (
    <div
      className={classNames(
        "absolute inset-0 h-full w-full rounded-2xl transition-opacity border flex flex-col gap-5 p-5 duration-500",
        inViewFeature === id
          ? "active-card opacity-100"
          : "pointer-events-none opacity-0"
      )}
    >
      <div
        className={classNames(
          "gradient absolute inset-0 origin-bottom-left rounded-2xl bg-gradient-to-br",
          // gradient
        )}
      />

      <div className="flex flex-col gap-1">
        <h2 className="font-bold text-3xl text-white">{compName}</h2>
        <p className="text-slate-400 text-base">{duration}</p>
      </div>

      <div className="flex flex-col gap-1">
        <h4 className="font-semibold text-xl text-slate-100">Details:</h4>
        <p className="text-slate-400 text-base">{description}</p>
      </div>

      <div className="flex flex-col gap-1">
        <h4 className="font-semibold text-xl text-slate-100">Location:</h4>
        <p className="text-slate-400 text-base">{location}</p>
      </div>

      <div className="flex flex-col gap-1">
        <h4 className="font-semibold text-xl text-slate-100">Stacks:</h4>
        <div className="flex items-center gap-2">
          {stacks.map((Stack: any) => <Stack className="size-6" />)}
        </div>
      </div>
    </div>
  );
};

export default FeatureCard

// export const FanAgin = ({ id }: CardProps) => {
//   return (
//     <FeatureCard id={id}  />
//   );
// };

// export const Colors = ({ id }: CardProps) => {
//   return (
//     <FeatureCard id={id}  />
//   );
// };

// export const Availability = ({ id }: CardProps) => {
//   return (
//     <FeatureCard id={id}  />
//   );
// };

// export const SchedulingLinks = ({ id }: CardProps) => {
//   return (
//     <FeatureCard id={id}  />
//   );
// };

// export const Team = ({ id }: CardProps) => {
//   return (
//     <FeatureCard id={id}  />
//   );
// };
