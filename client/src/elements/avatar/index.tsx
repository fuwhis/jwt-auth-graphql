import { Avatar as MAvatar } from '@mui/material';

type AvatarProps = {
    src?: string,
    className?: string,
    alt: string,
    name?: string,
}

const stringToColor = (string: string) => {
    let hash = 0;

    for (let i = 0; i < string.length; i += 1) {
        hash = string.charCodeAt(i) + ((hash << 5) - hash)
    }

    let color = '#';

    for (let i = 0; i < 3; i += 1) {
        const value = (hash >> (i * 8)) & 0xff;
        color += `00${value.toString(16)}`.slice(-2);
    }
    return color
}

const stringAvatar = (name: string) => {
    return {
        sx: {
            bgcolor: stringToColor(name)
        },
        children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`
    }
}

const Avatar = ({
    src,
    className = '',
    alt,
    name,
    ...rest
}: AvatarProps) => {
    const avatarProps = name ? stringAvatar(name) : undefined;
    return (
        <MAvatar
            className={`${className}`}
            src={src}
            alt={alt}
            {...avatarProps}
            {...rest}
        />
    )
}

export default Avatar