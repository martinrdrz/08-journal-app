import { Typography } from '@mui/material';
import { JournalLayout } from '../layout/JournalLayout';
import { NothingSelectedView } from '../views/NothingSelectedView';

export const JournalPage = () => {
    return (
        <JournalLayout>
            {/*<Typography>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt voluptatem, aspernatur consequuntur,
                delectus cumque iure dolor totam ea molestiae facilis velit ducimus, laudantium aperiam consectetur quas
                adipisci qui sequi quaerat!
            </Typography>*/}
            <NothingSelectedView />
        </JournalLayout>
    );
};
