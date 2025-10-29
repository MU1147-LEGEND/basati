import { useFormStatus } from "react-dom";
import { Button } from "../../components/ui/button";
import Spinner from "../../components/ui/spinner";

const AddTeacherBTN = ({ isUploading }) => {
    const { pending } = useFormStatus();

    return (
        <Button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white disabled:cursor-not-allowed disabled:opacity-100"
            disabled={isUploading || pending}
        >
            {pending ? (
                <>
                    Adding <Spinner />
                </>
            ) : (
                "Add Teacher"
            )}
        </Button>
    );
};
export default AddTeacherBTN;
