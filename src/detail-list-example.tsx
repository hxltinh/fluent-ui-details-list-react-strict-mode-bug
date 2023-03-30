import {
    DetailsList,
    IColumn,
    SelectionMode,
} from '@fluentui/react/lib/DetailsList';

export const DetailsListDocumentsExample = () => {
    return (
        <DetailsList
            selectionMode={SelectionMode.multiple}
            columns={columns}
            items={items}
        />
    );
};

const columns: IColumn[] = [
    {
        key: 'column2',
        name: 'Name',
        fieldName: 'name',
        minWidth: 210,
        maxWidth: 350,
        isRowHeader: true,
        isResizable: true,
        isSorted: true,
        isSortedDescending: false,
        sortAscendingAriaLabel: 'Sorted A to Z',
        sortDescendingAriaLabel: 'Sorted Z to A',
        onColumnClick: e => {
            console.log('event', e);
        },
        data: 'string',
        onRender: (item: IDocument) => {
            return <span>{item.name}</span>;
        },
        isPadded: true,
    },
    {
        key: 'column3',
        name: 'Value',
        fieldName: 'dateModifiedValue',
        minWidth: 70,
        maxWidth: 90,
        isResizable: true,
        onColumnClick: e => {
            console.log('event', e);
        },
        data: 'number',
        onRender: (item: IDocument) => {
            return <span>{item.value}</span>;
        },
        isPadded: true,
    },
];

const items: IDocument[] = [
    {
        key: 1,
        name: 'one',
        value: 'value one',
    },
    {
        key: 2,
        name: 'two',
        value: 'value two',
    },
];

type IDocument = {
    key: number;
    name: string;
    value: string;
};

export interface IDetailsListDocumentsExampleState {
    columns: IColumn[];
    items: IDocument[];
    selectionDetails: string;
    isModalSelection: boolean;
    isCompactMode: boolean;
    announcedMessage?: string;
}
