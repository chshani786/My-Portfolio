import { FC } from "react";

interface Props {
    title: string;
}

export const SectionTitle: FC<Props> = ({ title }) => {
    return (
        <>
            <div className="w-full flex justify-center flex-col">
                <span className="w-auto text-3xl text-center mb-4 bg-clip-text text-primary font-medium bg-gradient-to-r from-primary to-secondary tracking-wide">
                    {title}
                </span>
                <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8"></div>
            </div>
        </>
    );
};
