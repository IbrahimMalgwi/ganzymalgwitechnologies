// src/components/ui/Button.jsx
import React from 'react';

const Button = ({
                    children,
                    variant = 'primary',
                    size = 'medium',
                    icon: Icon,
                    iconPosition = 'right',
                    className = '',
                    disabled = false,
                    href,
                    ...props
                }) => {
    const baseClasses = 'inline-flex items-center justify-center font-semibold rounded-lg transition duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2';

    const variants = {
        primary: 'btn-primary',
        secondary: 'btn-secondary',
        outline: 'btn-outline',
        white: 'btn-white',
        'outline-white': 'btn-outline-white',
        ghost: 'text-[#0F009A] hover:bg-blue-50 focus:ring-blue-500'
    };

    const sizes = {
        small: 'px-4 py-2 text-sm',
        medium: 'px-6 py-3 text-base',
        large: 'px-8 py-4 text-lg'
    };

    const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed' : '';

    const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${disabledClasses} ${className}`;

    if (href) {
        return (
            <a href={href} className={classes} {...props}>
                {Icon && iconPosition === 'left' && <Icon className="mr-2" />}
                {children}
                {Icon && iconPosition === 'right' && <Icon className="ml-2" />}
            </a>
        );
    }

    return (
        <button className={classes} disabled={disabled} {...props}>
            {Icon && iconPosition === 'left' && <Icon className="mr-2" />}
            {children}
            {Icon && iconPosition === 'right' && <Icon className="ml-2" />}
        </button>
    );
};

export default Button;