import {createStyles} from '@mantine/core';

const useStyles = createStyles((theme) => ({
    board: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: theme.spacing.sm,
    },
}));

const Example = () => {
    const {classes} = useStyles();
    return <div className={classes.board}>Hello Mantine</div>;
};

export default Example;