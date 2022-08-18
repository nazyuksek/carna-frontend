import React from 'react';
import './TemplateName.scss';

export interface TemplateNameProps {
    label?: string;
}

const TemplateName = ({ label }: TemplateNameProps) => {
    return (
        <div className="TemplateName" data-testid="TemplateName">
            <div className="relative bg-white">
                <div className="max-w-7xl mx-auto px-6 sm:px-8">
                    <h1>{label}</h1>
                </div>
            </div>
        </div>
    );
};

export default TemplateName;
