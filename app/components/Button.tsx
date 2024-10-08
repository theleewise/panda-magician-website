type Props = {
    href?: string,
    children: React.ReactNode,
    target?: string,
    rel?: string,
    onClick?: () => void,
    type?: 'button' | 'submit' | 'reset',
    size?: 'small' | 'medium' | 'large',
    disabled?: boolean,
};

export default function Button({ size, href, target, rel, onClick, type, disabled, children }: Props) {
    const classes = [
        'inline-block',
        'no-underline',
        'leading-none',
        !disabled ? 'cursor-pointer' : 'cursor-not-allowed',
        !disabled ? 'bg-primary-500' : 'bg-gray-300',
        !disabled ? 'text-white' : 'text-gray-600',
        disabled ? 'opacity-20' : '',
        'font-bold',
        size === 'small' ? 'py-2 px-4' : size === 'large' ? 'py-3 px-10' : 'py-3 px-6',
        'rounded',
        !disabled ? 'hover:bg-primary-700' : '',
        size === 'small' ? 'text-xs' : size === 'large' ? 'text-2xl' : 'text-base',
    ].join(' ');

    if (href) return (
        <a className={classes} href={href} target={target} rel={rel}>
            {children}
        </a>
    );

    return (
        <button type={type} className={classes} onClick={onClick} disabled={disabled}>
            {children}
        </button>
    );
}