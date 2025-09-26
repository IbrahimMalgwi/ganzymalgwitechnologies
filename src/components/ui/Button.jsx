import React from 'react';

const Button = ({
                    children,
                    variant = 'primary',
                    size = 'medium',
                    icon: Icon,
                    iconPosition = 'right',
                    className = '',
                    disabled = false,
                    ...props
                }) => {
    const baseClasses = 'inline-flex items-center justify-center font-semibold rounded-lg transition duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2';

    const variants = {
        primary: 'bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-500',
        secondary: 'bg-gray-200 hover:bg-gray-300 text-gray-800 focus:ring-gray-500',
        outline: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white focus:ring-blue-500',
        ghost: 'text-blue-600 hover:bg-blue-50 focus:ring-blue-500'
    };

    const sizes = {
        small: 'px-4 py-2 text-sm',
        medium: 'px-6 py-3 text-base',
        large: 'px-8 py-4 text-lg'
    };

    const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed' : '';

    const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${disabledClasses} ${className}`;

    return (
        <button className={classes} disabled={disabled} {...props}>
            {Icon && iconPosition === 'left' && <Icon className="mr-2" />}
            {children}
            {Icon && iconPosition === 'right' && <Icon className="ml-2" />}
        </button>
    );
};

export default Button;