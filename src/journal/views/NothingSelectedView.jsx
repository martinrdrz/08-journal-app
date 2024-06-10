import { StarOutline } from '@mui/icons-material';
import { Grid } from '@mui/material';

export const NothingSelectedView = () => {
    return (
        <Grid
            container
            spancing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            sx={{ minHeight: 'calc(100vh - 120px)', backgroundColor: 'primary.main' }}
        >
            <Grid item sx={12}>
                <StarOutline sx={{ fontSize: 100, color: 'white' }} />
            </Grid>
        </Grid>
    );
};
