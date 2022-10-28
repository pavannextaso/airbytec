import React, { useState } from "react";
import { FormattedMessage, useIntl } from "react-intl";

import { ControlLabels } from "components/LabeledControl";
import { Card } from "components/ui/Card";
import { DropDown } from "components/ui/DropDown";
import { Spinner } from "components/ui/Spinner";

import { Geography } from "core/request/AirbyteClient";
import { useConnectionEditService } from "hooks/services/ConnectionEdit/ConnectionEditService";
import { useNotificationService } from "hooks/services/Notification";
import { useAvailableGeographies } from "packages/cloud/services/geographies/GeographiesService";
import { links } from "utils/links";

import styles from "./UpdateConnectionGeography.module.scss";

export const UpdateConnectionGeography: React.FC = () => {
  const { connection, updateConnection, connectionUpdating } = useConnectionEditService();
  const { registerNotification } = useNotificationService();
  const { formatMessage } = useIntl();
  const [selectedValue, setSelectedValue] = useState<Geography | undefined>();

  const { geographies } = useAvailableGeographies();

  const handleSubmit = async ({ value }: { value: Geography }) => {
    try {
      setSelectedValue(value);
      await updateConnection({
        connectionId: connection.connectionId,
        geography: value,
      });
    } catch (e) {
      registerNotification({
        id: "connection.geographyUpdateError",
        title: formatMessage({ id: "connection.geographyUpdateError" }),
        isError: true,
      });
    }
    setSelectedValue(undefined);
  };

  return (
    <Card withPadding>
      <div className={styles.wrapper}>
        <div>
          <ControlLabels
            nextLine
            label={<FormattedMessage id="connection.geographyTitle" />}
            message={
              <FormattedMessage
                id="connection.geographyDescription"
                values={{
                  a: (node: React.ReactNode) => (
                    <a href={links.docsLink} target="_blank" rel="noreferrer">
                      {node}
                    </a>
                  ),
                }}
              />
            }
          />
        </div>
        <div className={styles.dropdownWrapper}>
          <div className={styles.spinner}>{connectionUpdating && <Spinner small />}</div>
          <div className={styles.dropdown}>
            <DropDown
              isDisabled={connectionUpdating}
              options={geographies.map((geography) => ({
                label: formatMessage({ id: `connection.geography.${geography}` }),
                value: geography,
              }))}
              value={selectedValue ? selectedValue : connection.geography}
              onChange={handleSubmit}
            />
          </div>
        </div>
      </div>
    </Card>
  );
};