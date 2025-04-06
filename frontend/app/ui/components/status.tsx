// import { CheckIcon, ClockIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';

export default function InvoiceStatus({ status }: { status: string }) {
  return (
    <span
      className={clsx(
        'bg-white inline-flex items-center rounded-full px-2 py-1',
        {
          'text-yellow-500': status === 'low-stock',
          'text-green-500': status === 'in-stock',
          'text-red-500': status === 'out-stock',
        },
      )}
    >
      {status}
    </span>
  );
}
