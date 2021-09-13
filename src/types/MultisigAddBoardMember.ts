import { Address } from "@elrondnetwork/erdjs/out";
import i18next from "i18next";
import { MultisigAction } from "./MultisigAction";
import { MultisigActionType } from "./MultisigActionType";

export class MultisigAddBoardMember extends MultisigAction {
  address: Address;

  constructor(address: Address) {
    super(MultisigActionType.AddBoardMember);
    this.address = address;
  }

  title() {
    return i18next.t("Add Board Member");
  }

  description() {
    return this.address.bech32();
  }

  tooltip() {
    return "";
  }
}
