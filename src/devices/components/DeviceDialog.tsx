import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import TextField from "@material-ui/core/TextField";
import LoadingButton from "@material-ui/lab/LoadingButton";
import { useFormik } from "formik";
import { useTranslation } from "react-i18next";
import * as Yup from "yup";
import { Device } from "../types/device";

const genders = [
  { label: "deviceManagement.form.gender.options.f", value: "F" },
  { label: "deviceManagement.form.gender.options.m", value: "M" },
  { label: "deviceManagement.form.gender.options.n", value: "NC" },
];
const roles = ["Admin", "Member"];

type DeviceDialogProps = {
  onAdd: (device: Partial<Device>) => void;
  onClose: () => void;
  onUpdate: (device: Device) => void;
  open: boolean;
  processing: boolean;
  device?: Device;
};

const DeviceDialog = ({
  onAdd,
  onClose,
  onUpdate,
  open,
  processing,
  device,
}: DeviceDialogProps) => {
  const { t } = useTranslation();

  const editMode = Boolean(device && device.id);

  const handleSubmit = (values: Partial<Device>) => {
    if (device && device.id) {
      onUpdate({ ...values, id: device.id } as Device);
    } else {
      onAdd(values);
    }
  };

  const formik = useFormik({
    initialValues: {
      disabled: device ? device.disabled : false,
      macAddress: device ? device.macAddress : "",
      firstName: device ? device.firstName : "",
      gender: device ? device.gender : "F",
      lastName: device ? device.lastName : "",
      role: device ? device.role : "",
    },
    validationSchema: Yup.object({
      macAddress: Yup.string()
        .macAddress(t("common.validations.macAddress"))
        .required(t("common.validations.required")),
      firstName: Yup.string()
        .max(20, t("common.validations.max", { size: 20 }))
        .required(t("common.validations.required")),
      lastName: Yup.string()
        .max(30, t("common.validations.max", { size: 30 }))
        .required(t("common.validations.required")),
      role: Yup.string().required(t("common.validations.required")),
    }),
    onSubmit: handleSubmit,
  });

  return (
    <Dialog open={open} onClose={onClose} aria-labelledby="device-dialog-title">
      <form onSubmit={formik.handleSubmit} noValidate>
        <DialogTitle id="device-dialog-title">
          {editMode
            ? t("deviceManagement.modal.edit.title")
            : t("deviceManagement.modal.add.title")}
        </DialogTitle>
        <DialogContent>
          <TextField
            margin="normal"
            required
            fullWidth
            id="lastName"
            label={t("deviceManagement.form.lastName.label")}
            name="lastName"
            autoComplete="family-name"
            autoFocus
            disabled={processing}
            value={formik.values.lastName}
            onChange={formik.handleChange}
            error={formik.touched.lastName && Boolean(formik.errors.lastName)}
            helperText={formik.touched.lastName && formik.errors.lastName}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="firstName"
            label={t("deviceManagement.form.firstName.label")}
            name="firstName"
            autoComplete="given-name"
            disabled={processing}
            value={formik.values.firstName}
            onChange={formik.handleChange}
            error={formik.touched.firstName && Boolean(formik.errors.firstName)}
            helperText={formik.touched.firstName && formik.errors.firstName}
          />
          <FormControl component="fieldset" margin="normal">
            <FormLabel component="legend">
              {t("deviceManagement.form.gender.label")}
            </FormLabel>
            <RadioGroup
              row
              aria-label="gender"
              name="gender"
              value={formik.values.gender}
              onChange={formik.handleChange}
            >
              {genders.map((gender) => (
                <FormControlLabel
                  key={gender.value}
                  disabled={processing}
                  value={gender.value}
                  control={<Radio />}
                  label={t(gender.label)}
                />
              ))}
            </RadioGroup>
          </FormControl>
          <TextField
            margin="normal"
            required
            fullWidth
            id="macAddress"
            label={t("deviceManagement.form.macAddress.label")}
            name="macAddress"
            autoComplete="macAddress"
            disabled={processing}
            value={formik.values.macAddress}
            onChange={formik.handleChange}
            error={formik.touched.macAddress && Boolean(formik.errors.macAddress)}
            helperText={formik.touched.macAddress && formik.errors.macAddress}
          />
          <TextField
            margin="normal"
            required
            id="role"
            disabled={processing}
            fullWidth
            select
            label={t("deviceManagement.form.role.label")}
            name="role"
            value={formik.values.role}
            onChange={formik.handleChange}
            error={formik.touched.role && Boolean(formik.errors.role)}
            helperText={formik.touched.role && formik.errors.role}
          >
            {roles.map((role) => (
              <MenuItem key={role} value={role}>
                {role}
              </MenuItem>
            ))}
          </TextField>
          <FormControl component="fieldset" margin="normal">
            <FormControlLabel
              name="disabled"
              disabled={processing}
              onChange={formik.handleChange}
              checked={formik.values.disabled}
              control={<Checkbox />}
              label={t("deviceManagement.form.disabled.label")}
            />
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>{t("common.cancel")}</Button>
          <LoadingButton loading={processing} type="submit" variant="contained">
            {editMode
              ? t("deviceManagement.modal.edit.action")
              : t("deviceManagement.modal.add.action")}
          </LoadingButton>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default DeviceDialog;
