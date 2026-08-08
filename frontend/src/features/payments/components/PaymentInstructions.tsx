type Props = {
  instructions: string | null;
};

export default function PaymentInstructions({
  instructions,
}: Props) {
  return (
    <div className="rounded-3xl border bg-card p-8">

      <h2 className="mb-6 text-2xl font-bold">
        Instructions
      </h2>

      {instructions ? (
        <p className="whitespace-pre-line text-muted-foreground">
          {instructions}
        </p>
      ) : (
        <ol className="space-y-4 text-muted-foreground">

          <li>
            1. Transfer the subscription amount to the bank account.
          </li>

          <li>
            2. Keep your payment receipt.
          </li>

          <li>
            3. Upload the receipt below.
          </li>

          <li>
            4. Your payment will be reviewed manually.
          </li>

          <li>
            5. Your subscription will be activated after verification.
          </li>

        </ol>
      )}

    </div>
  );
}